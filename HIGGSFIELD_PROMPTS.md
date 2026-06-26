# KORA — Higgsfield Asset Prompt Pack
*The "prompter" output. Paste these into Higgsfield (GPT-Image for stills, Seedance for video). Once the Higgsfield connector is live in Cowork, I can fire these for you directly.*

Pipeline: **GPT-Image → stills first** (establish the look, pick keepers) → **Seedance → motion** (animate the approved stills or shoot fresh clips).

---

## Global style guide (prepend to EVERY prompt)

> Brand: KORA — Bangladesh-born, heritage + minimalist premium training apparel. Aesthetic: quiet, editorial, natural. Palette strictly raw-cotton bone (#EDE7DB), warm near-black ink (#1A1815), terracotta/clay (#B4552D), muted sage (#7C7A66). Soft natural daylight, gentle shadows, matte finish, fine fabric texture visible. Minimal, lots of negative space, calm composition. Premium but understated — think Lululemon/Represent restraint, not loud gymwear. Shot on a 50mm or 85mm lens, shallow depth of field, photographic realism.

**Negative / guardrails (append to every prompt):**
> No visible brand logos or wordmarks, no text, no watermarks, no neon or saturated colors, no busy backgrounds, no plastic/AI sheen, no exaggerated muscles, no aggressive "beast-mode" energy. Natural skin, realistic fabric drape.

**Aspect ratios by use:** website hero/cards = `4:5` and `1:1`; Instagram feed = `4:5`; Stories/Reels/TikTok = `9:16`; OG/banner = `16:9`.

---

## A. Stills (GPT-Image)

**A1 — Fabric still life (hero / origin section)**
> A folded stack of raw, unbleached cotton fabric in warm bone tones resting on a stone surface, soft window daylight raking across to reveal the weave texture, a single terracotta-clay thread detail, minimalist editorial product photography, lots of negative space, 50mm, shallow depth of field. — 4:5

**A2 — The Everyday Tee, flat-lay**
> A premium heavyweight cotton t-shirt in bone/off-white, neatly folded on a bone-colored linen backdrop, garment-dyed matte texture, soft top-down daylight, minimal styling, one sprig of raw cotton boll beside it for craft context, editorial e-commerce flat-lay. — 1:1

**A3 — The Everyday Tee, on figure (training)**
> A fit, athletic person in their late 20s wearing a plain bone heavyweight cotton training tee, mid-movement in a calm minimalist concrete gym with warm daylight, quiet confident posture, natural body, editorial fitness fashion photography, muted warm grade, 85mm. — 4:5

**A4 — Fabric macro (texture detail)**
> Extreme close-up macro of woven cotton fabric, individual threads and weave visible, bone and faint clay tones, raking soft light, tactile and premium, abstract minimalist texture. — 16:9

**A5 — Lifestyle, Vancouver**
> A fit person in minimalist bone-toned cotton activewear walking outdoors in Vancouver on an overcast morning — soft diffused West-Coast light, mountains and cedar faintly in the background, calm editorial lifestyle shot, muted natural palette, candid not posed. — 9:16

**A6 — Origin / craft (Bangladesh, evocative, respectful)**
> Soft documentary-style image evoking cotton craft heritage: warm hands holding raw unbleached cotton cloth, natural daylight, earthy clay and bone tones, dignified and quiet, no faces required, shallow depth of field, fine-art editorial. — 4:5

---

## B. Video (Seedance)

Either animate an approved still (image-to-video) or use these as text-to-video. Keep motion slow and premium; 3–6s loops.

**B1 — Hero loop (fabric in motion)**
> Slow-motion bone-colored cotton fabric drifting and settling in soft daylight, threads catching light, calm and hypnotic, minimalist, muted warm palette, seamless loop, no text. — 9:16 and 16:9

**B2 — Product turntable**
> A bone heavyweight cotton tee slowly rotating on an invisible form against a bone backdrop, soft studio daylight revealing fabric texture and drape, premium e-commerce motion, smooth and minimal. — 1:1

**B3 — Fabric macro pull**
> Macro camera slowly pulling back from individual cotton threads to reveal woven cloth, raking light, tactile premium texture, muted bone and clay, meditative pace. — 16:9

**B4 — Training b-roll**
> A fit person in a plain bone cotton tee moving through a calm warm-lit minimalist gym, slow cinematic b-roll, shallow depth of field, muted grade, quiet and confident, no logos. — 9:16

**B5 — Origin → destination**
> A gentle cinematic transition from warm cotton-field/craft imagery (earthy, golden) dissolving into a cool, misty Vancouver morning, symbolizing Bangladesh to Vancouver, muted natural palette, emotional and quiet. — 16:9

---

## C. Where each asset goes

| Asset | Use |
|-------|-----|
| A1 fabric still | Homepage hero panel + origin section (replace `.art--bone` blocks) |
| A2 flat-lay | Shop — The Everyday Tee card |
| A3 on-figure | Hero product feature + shop hero |
| A4 / B3 macro | "From the source" fabric section |
| A5 / B4 lifestyle | About page + IG/TikTok |
| A6 origin | About page story spine |
| B1 hero loop | Homepage hero background (muted, behind text) |
| B2 turntable | Shop product |
| B5 origin→destination | Launch teaser video |

**Saving convention:** drop finals into `C:\Users\user\kora\assets\` as `hero-fabric.jpg`, `tee-flatlay.jpg`, `tee-onfigure.jpg`, `fabric-macro.jpg`, `lifestyle-van.jpg`, `origin.jpg`, and `*.mp4` for video. Then I (or Claude Code) swap them into the `.art` blocks on the site.

> Reminder: keep it honest. These are *concept/brand* visuals. If you ever show a specific founder or a real product, use real photos — don't pass AI imagery off as documentary fact.
