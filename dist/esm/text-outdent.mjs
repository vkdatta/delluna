export const name="text-outdent";
export const id="dl_5b46d0c9bdae0b659da3";
export const url=new URL("../icons/text-outdent.svg?v=cdb798e5a798642b8556c9d2349f1c6230b337be839bea8f8328a4442c494ef7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
