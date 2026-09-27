export const name="method";
export const id="dl_d323435fddc44231a43b";
export const url=new URL("../icons/method.svg?v=df0c214289734f47d3f8f2e03bf670e180a3a991727a76ec1ec29cfa8da30ffa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
