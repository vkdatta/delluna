export const name="lucid_2-iteration-cw";
export const id="dl_4d39cc97b956484f8ca2";
export const url=new URL("../icons/lucid_2-iteration-cw.svg?v=a26bc1645a0b4a1167d8e2cb04a39f8ac0ed0984385d0333493685a7eeffdc98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
