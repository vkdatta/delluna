export const name="problem";
export const id="dl_a3524df7319575ae6361";
export const url=new URL("../icons/problem.svg?v=b0e995ca06651ce62d66b20c54912bc4a43f18a43db792e3b9f1dbf84b644934",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
