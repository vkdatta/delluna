export const name="unfold_less_alt";
export const id="dl_59ceea98ac9aced53a3b";
export const url=new URL("../icons/unfold_less_alt.svg?v=1eaad0b63bd8a5848a8745f325b6ca66c68a37ac8743d8878679ee43588d7ad8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
