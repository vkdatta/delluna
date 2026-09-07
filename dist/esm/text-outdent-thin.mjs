export const name="text-outdent-thin";
export const id="dl_5ede3e71b5d4466c987e";
export const url=new URL("../icons/T/text-outdent-thin.svg?v=e5bed72a061384ed040fea241bfdcdc344de71cd9bb42cce62e5488a535575f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
