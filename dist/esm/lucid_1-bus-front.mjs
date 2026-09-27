export const name="lucid_1-bus-front";
export const id="dl_2237df42f65b4050ab81";
export const url=new URL("../icons/lucid_1-bus-front.svg?v=1ffa73751826e1ec0b3c0102fe357728c2bb375fd8e1c51c98e263abf7d24b2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
