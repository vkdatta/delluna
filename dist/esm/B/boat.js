export const name="boat";
export const id="dl_ad041c50ab184922be04";
export const url=new URL("../../icons/B/boat.svg?v=0156250dfe12524d02f4c3686890c3b8800b7f5ff0adcc2a8a3e0eea513306a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
