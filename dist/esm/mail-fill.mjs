export const name="mail-fill";
export const id="dl_9e9cb07bce6b4b75895d";
export const url=new URL("../icons/mail-fill.svg?v=58e2eb6e47a768a675d86ebab7eafba67be6e2c9c44e9145aab8453c330f0bd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
