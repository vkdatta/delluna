export const name="arrow-fat-lines-right-thin";
export const id="dl_429149402708437cb846";
export const url=new URL("../icons/arrow-fat-lines-right-thin.svg?v=f2dba1a1bd885f45433795cd0ad2a70cd7e7977cf5f741eb574581773d9afe8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
