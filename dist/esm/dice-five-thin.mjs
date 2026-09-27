export const name="dice-five-thin";
export const id="dl_2346f9883b2a440e8f99";
export const url=new URL("../icons/dice-five-thin.svg?v=5193b673d3bdf564c7f08efcf7e72069ee694b4cf157c0a9924a8540b37a3b2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
