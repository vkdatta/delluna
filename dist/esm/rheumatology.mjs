export const name="rheumatology";
export const id="dl_8df1e60ba3b746a7847c";
export const url=new URL("../icons/R/rheumatology.svg?v=beaa0cda0ea881822b5670fe2f9f26f91019ed04b47f123f01141722338113b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
