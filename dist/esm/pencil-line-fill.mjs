export const name="pencil-line-fill";
export const id="dl_a439538d5fac4512bc9e";
export const url=new URL("../icons/pencil-line-fill.svg?v=b85a9126afd2c3e34037fe6ac9f7f6b947112d0eafd3ff24713895ec2b4b777c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
