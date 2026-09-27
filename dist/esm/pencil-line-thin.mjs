export const name="pencil-line-thin";
export const id="dl_cfa5368f7fe7428e9ae9";
export const url=new URL("../icons/pencil-line-thin.svg?v=bd42e3d786660ea488f063cba8e9a7f5d0656c1b0a4ac6b757069745cd762b52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
