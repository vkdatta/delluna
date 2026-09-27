export const name="more";
export const id="dl_6648ae2affae4cbb2a07";
export const url=new URL("../icons/more.svg?v=276c8dd324de813f667d12afff1c8e8fe05e81c72037fef9de1abbbd8b5d8766",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
