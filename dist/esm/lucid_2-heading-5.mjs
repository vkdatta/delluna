export const name="lucid_2-heading-5";
export const id="dl_b084ac4a5e5b4c259dcc";
export const url=new URL("../icons/lucid_2-heading-5.svg?v=2de36ef30751e65b5129d5f1e0bc9937375536d11f253fd2f50c42e3c4b1bedc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
