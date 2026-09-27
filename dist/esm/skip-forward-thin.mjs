export const name="skip-forward-thin";
export const id="dl_24d28f99df4e8431c1fe";
export const url=new URL("../icons/skip-forward-thin.svg?v=d1ba46a9d15e95b6d7895e5247ddb0edec715573558262f0d215881dc6abe4ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
