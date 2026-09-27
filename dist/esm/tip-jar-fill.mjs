export const name="tip-jar-fill";
export const id="dl_47699b97eeae413b1cfa";
export const url=new URL("../icons/tip-jar-fill.svg?v=63567408cd06416703914c1e5645e36ed88b19f6707d69c3f50dab9b5c395127",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
