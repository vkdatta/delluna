export const name="summarize";
export const id="dl_6dbd4634e48fb1832a79";
export const url=new URL("../icons/summarize.svg?v=db886b6ca0b12565e6e53f0d153718799f67466863b5bac54313e69bd426afc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
