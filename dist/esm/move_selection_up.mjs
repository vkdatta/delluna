export const name="move_selection_up";
export const id="dl_7593fbdec61ecd867be6";
export const url=new URL("../icons/move_selection_up.svg?v=8fea5161fdccd6bd5eb2fa6a15a9c46eb8322ed9a29c9ea30ddbfb57a6371d19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
