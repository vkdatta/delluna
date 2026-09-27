export const name="swipe_up_alt";
export const id="dl_0497ad4af7bbb7f3ba4b";
export const url=new URL("../icons/swipe_up_alt.svg?v=113c68d5c9aa6efe783e335ffdba33304d5ccf5990544e065930aa72fcbd3fc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
