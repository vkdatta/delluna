export const name="pencil-simple-thin";
export const id="dl_6e59d42433a94fb581ba";
export const url=new URL("../icons/pencil-simple-thin.svg?v=72a091583032cad6aa2d5ca93fe13c54fa9c85c318c3dc7be71f2df5f937ef96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
