export const name="square_dot";
export const id="dl_d56acafcbc6aa165ee69";
export const url=new URL("../icons/square_dot.svg?v=1c2132dff898aca9025a81bd64603d18ef5095bc6d7de86cf774c3ce95f8aa9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
