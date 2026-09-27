export const name="lucid_2-iteration-ccw";
export const id="dl_953dbc6fe9f146cbbf49";
export const url=new URL("../icons/lucid_2-iteration-ccw.svg?v=106f497cf77ba4849d7874f4b0d5d88ad930caab928e6fd29ea69fd668bb3ffe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
