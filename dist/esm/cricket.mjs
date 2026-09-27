export const name="cricket";
export const id="dl_564c806fd0f149768dd2";
export const url=new URL("../icons/cricket.svg?v=bb61592e4b5aa64a810ce34cd18a63f34bb80da6cfec205be2b29a483cc69d59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
