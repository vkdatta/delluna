export const name="step-back";
export const id="dl_c11160e18e514669b9f3";
export const url=new URL("../icons/step-back.svg?v=a82936857424e2db58e780a689426ffbfb98e0845da3ccce6e53bc97d21724cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
