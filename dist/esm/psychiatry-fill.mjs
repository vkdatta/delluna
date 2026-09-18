export const name="psychiatry-fill";
export const id="dl_c6f1cadaf9ee46f095a7";
export const url=new URL("../icons/P/psychiatry-fill.svg?v=cc10e45eaef1c72adb6a49ba1eb4c5fbf6484eb2c010e55e894d6f0550abcf05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
