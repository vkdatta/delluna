export const name="codesandbox-logo-bold";
export const id="dl_b1a8fec30c0646b69f3b";
export const url=new URL("../icons/codesandbox-logo-bold.svg?v=e88748b49faac501c8977475ab0c44747cb2333093dd839af7670ae339e8880d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
