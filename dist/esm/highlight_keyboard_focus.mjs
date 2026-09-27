export const name="highlight_keyboard_focus";
export const id="dl_87483fc4808b06751e1f";
export const url=new URL("../icons/highlight_keyboard_focus.svg?v=8afc92ea69f553b85c259abd781ae689913c5d9113f004fd0bf1772b2327fd47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
