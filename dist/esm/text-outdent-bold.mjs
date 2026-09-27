export const name="text-outdent-bold";
export const id="dl_56959fc614c29e8337bb";
export const url=new URL("../icons/text-outdent-bold.svg?v=ecbb5c89c940c8d4b61b6d4910455d0cf59515772c77d6ce70373466f1a4f958",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
