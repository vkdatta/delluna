export const name="egg-crack-fill";
export const id="dl_706311dda4b0424caf07";
export const url=new URL("../icons/egg-crack-fill.svg?v=dab2bbe50656405ffcd130f9aed2c7ad512b54f539b7f759f341ef455292564e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
