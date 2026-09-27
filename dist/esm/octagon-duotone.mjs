export const name="octagon-duotone";
export const id="dl_86902b80eef442c99e71";
export const url=new URL("../icons/octagon-duotone.svg?v=16992db6b78f1c7d43d8b8c7ca95f1ba65143e9da6564f9ea55615aacb2c1931",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
