export const name="pencil-simple-line-thin";
export const id="dl_276208f3e290453db1ff";
export const url=new URL("../icons/pencil-simple-line-thin.svg?v=9e45e77deadf5b0f5ae1f3d53e0a9ad6f28d0dfef838e94b2fc5caaeb975d296",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
