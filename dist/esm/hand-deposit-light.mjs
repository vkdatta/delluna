export const name="hand-deposit-light";
export const id="dl_e816743e88f6462abe5b";
export const url=new URL("../icons/hand-deposit-light.svg?v=56d99a20c79376eced230ad9e223bfc61470fab31bf9b520ed96621cc396fee5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
