export const name="tv_with_assistant";
export const id="dl_ede0b301c4c0dcb28b1d";
export const url=new URL("../icons/tv_with_assistant.svg?v=bf38b07346a508bb04e68eef292ded89c4a199ee4e4c91048d38cad0160a5db8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
