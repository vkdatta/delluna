export const name="crown-cross-light";
export const id="dl_6784d6da14be47c5b9f3";
export const url=new URL("../icons/crown-cross-light.svg?v=c80597bd230d48f35af2bbae10d2745392fdd51db1b53e9b90c694ac4d0c89d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
