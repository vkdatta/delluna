export const name="google-play-logo";
export const id="dl_c84108562e8a4b4c9ecf";
export const url=new URL("../icons/google-play-logo.svg?v=b5d60d4df5e9cc250e1d518484352fd34766056b4e00aa6da471050728acee36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
