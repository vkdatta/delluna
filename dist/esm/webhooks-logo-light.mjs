export const name="webhooks-logo-light";
export const id="dl_217f36899539594fad44";
export const url=new URL("../icons/webhooks-logo-light.svg?v=a5b658cc736523fb4c9ce4b17b91a7ea256dc8e09b107dc1660b3c88c73ab26e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
