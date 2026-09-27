export const name="content_paste-fill";
export const id="dl_5368ca4a7735230f920b";
export const url=new URL("../icons/content_paste-fill.svg?v=367e398354ff5f3eca1f78f05ed1fd08f1bb748ae92aba9fb3ac6f71f676f2d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
