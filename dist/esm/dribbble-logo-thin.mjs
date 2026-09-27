export const name="dribbble-logo-thin";
export const id="dl_0cfea7b3fb1f4e0c894c";
export const url=new URL("../icons/dribbble-logo-thin.svg?v=9ce29874bdaf051da3f830d110dbfd0ab0313e364676554a6c71401e3bbe7218",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
