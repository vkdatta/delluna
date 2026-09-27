export const name="lucid_3-mouse-pointer-click";
export const id="dl_b65665829d7646058e87";
export const url=new URL("../icons/lucid_3-mouse-pointer-click.svg?v=a94534f1874652112b46ade476bc80a30fd22fb071e78f484513f6dece6b7d74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
