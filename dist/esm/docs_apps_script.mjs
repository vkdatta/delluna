export const name="docs_apps_script";
export const id="dl_bedfe24be04a1daf95f2";
export const url=new URL("../icons/docs_apps_script.svg?v=bc2f6618229c276d84ec806279deef6af76d942b95902c07da360a51998bfa8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
