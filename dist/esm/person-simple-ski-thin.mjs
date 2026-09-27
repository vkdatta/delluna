export const name="person-simple-ski-thin";
export const id="dl_389b627389a043e884f3";
export const url=new URL("../icons/person-simple-ski-thin.svg?v=a722e48f83822ee42764df92cab3cec04b7d062a9a091b0706043c506606c3e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
