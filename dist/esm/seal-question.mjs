export const name="seal-question";
export const id="dl_a5a37507a7e67472f83e";
export const url=new URL("../icons/seal-question.svg?v=7fd2cc808a18d20045d724f2a6736bf2c74bcaf9673bf2f005bde15fd7f2759e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
