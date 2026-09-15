export const name="balance-fill";
export const id="dl_bbdf310b6fb844b084b2";
export const url=new URL("../icons/B/balance-fill.svg?v=64abbcb6630b10a3bd6029fee9067ac6317b91c153104d26f456130e643704a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
