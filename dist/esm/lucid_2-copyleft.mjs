export const name="lucid_2-copyleft";
export const id="dl_26485cd3c5374476abdd";
export const url=new URL("../icons/lucid_2-copyleft.svg?v=2745d387881f9790879b78e6251670d4cfd64fcac32570aa37b05c8566481b23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
