export const name="sort_by_alpha-fill";
export const id="dl_26102a61a84942a52dad";
export const url=new URL("../icons/sort_by_alpha-fill.svg?v=48aa2bd679ef7954e6834d0b082781863f192b083d49a35f421fe853b066ad36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
