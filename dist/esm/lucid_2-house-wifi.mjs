export const name="lucid_2-house-wifi";
export const id="dl_4d1f708ec83547e1aa6a";
export const url=new URL("../icons/lucid_2-house-wifi.svg?v=69ce6529e2f6cd7568b0881f1e82b138ca96fc21eadbc37e742d0eb03ff9be28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
