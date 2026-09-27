export const name="step-forward";
export const id="dl_d11ce184e3a848dfb879";
export const url=new URL("../icons/step-forward.svg?v=4dc95a4ff96113ba0e70e5cb38e01c0888162b907f3e3b8aefa18233d572d428",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
