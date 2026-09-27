export const name="lucid_1-brackets";
export const id="dl_45aa90302b8c4dc69bc6";
export const url=new URL("../icons/lucid_1-brackets.svg?v=88c067324d85d3a6036d558b4dd6251927bba317803722511c837af24558b569",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
