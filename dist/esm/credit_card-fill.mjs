export const name="credit_card-fill";
export const id="dl_6f9f8f6bba3073c2a63b";
export const url=new URL("../icons/credit_card-fill.svg?v=54825f5efe27c502957bc59610d59ebb8089f1cb31c963037ccff9bce4904aba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
