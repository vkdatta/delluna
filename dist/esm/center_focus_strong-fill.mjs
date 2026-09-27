export const name="center_focus_strong-fill";
export const id="dl_64a1180a27641faaa2b2";
export const url=new URL("../icons/center_focus_strong-fill.svg?v=3003d4d099e1964cfc0429e81e0dfa0e23e6b24fd289e40867968e6fb56bea81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
