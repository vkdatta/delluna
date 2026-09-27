export const name="unlicense";
export const id="dl_4a6ca8c41e6bfbfa6614";
export const url=new URL("../icons/unlicense.svg?v=fe70b677812b94b6a6042abcc182e17617270271619897c3406f91a4d295589d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
