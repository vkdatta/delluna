export const name="waves-thin";
export const id="dl_698788b8f76a5958018e";
export const url=new URL("../icons/waves-thin.svg?v=bb1e0624a1be0bb9b331a351e0054a1f26f437064b0666c5e09e163655ce55a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
