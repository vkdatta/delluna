export const name="web_stories";
export const id="dl_0bb47e9671cd76deb12a";
export const url=new URL("../icons/web_stories.svg?v=57b4f696adf4a20372b026a87bacd325d575b479bcb39cde4a123086f36cccaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
